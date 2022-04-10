const Empregados = require('../models/EmpregadosModels')
const Departamentos = require('../models/DepartamentosModels')
const { indexAll } = require('./departamentosControllers')

module.exports = {
    async indexAll(req, res) {
        const empregados = await Empregados.findAll()
        return res.json(empregados)
    },

    async store(req, res) {
        const {
            departamento_id,
            emp_nome,
            emp_funcao,
            emp_turno,
            emp_sexo,
            emp_data_admissao } = req.body
        const empregado = await Empregados.create({
            departamento_id,
            emp_nome,
            emp_funcao,
            emp_turno,
            emp_sexo,
            emp_data_admissao
        })
        return res.status(200).send({
            status: 1,
            message: "Empregado Cadastrdo com Sucesso",
            empregado
        })
    },

    async index(req, res) {
        const { departamento_id } = req.params

        const empregado = await Departamentos.findByPk(departamento_id, {
            include: { association: 'departamento' }
        })
        return res.json(empregado)
    },
    
    async update(req, res) {
        const { empregado_id } = req.params
        const {
            departamento_id,
            emp_nome,
            emp_funcao,
            emp_turno,
            emp_sexo,
            emp_data_admissao } = req.body

        await Empregados.update({
            departamento_id,
            emp_nome,
            emp_funcao,
            emp_turno,
            emp_sexo,
            emp_data_admissao
        }, {
            where: { id: empregado_id }
        });

        return res.status(200).send({
            status: 1,
            message: "Empregado atualizado com sucesso!"
        })
    },
    async delete(req, res) {
        const { empregado_id } = req.params

        //validar funcionario
        const empregado = await Empregados.findByPk(empregado_id)
        if (!empregado)
            return res.status(400).json({ error: "Empregado não encontrado" })
        else
            console.log("Empregado encontrado")

        await Empregados.destroy({
            where: {
                id: empregado_id
            }

        })
        return res.status(200).send({
            status: 1,
            message: 'Empregado deletado com sucesso!!!',
            empregado
        })
    }
}