const Departamentos = require('../models/DepartamentosModels')
const Empregados = require ('../models/EmpregadosModels')

module.exports={
    async indexAll (req,res){
        const departamentos = await Departamentos.findAll()
        return res.json(departamentos)
    }, 
    async store (req,res){
        const {dep_nome, dep_local, dep_responsavel} = req.body
        const departamento = await Departamentos.create({
            dep_nome,
            dep_local,
            dep_responsavel
        })
        return res.status(200).send({
            status:1,
            message: "Departamento Cadastrado com Sucesso",
            departamento
        })
    }, 
    async update (req, res){
        const {departamento_id} = req.params   
        const {dep_nome, dep_local, dep_responsavel} = req.body

        await Departamentos.update({
            dep_nome,
            dep_local,
            dep_responsavel
        },{
            where: {id: departamento_id}
        })
        return res.status(200).send({
            status:1,
            message: "Departamento atualizado com Sucesso",
        })
    },
    async delete(req, res) {
        const { departamento_id } = req.params

        //validar funcionario
        const departamento = await Departamentos.findByPk(departamento_id)
        if (!departamento)
            return res.status(400).json({error: "Departamento não encontrado"})
        else
            console.log("Funcionario encontrado")

        await Departamentos.destroy({
            where: {
                id: departamento_id
            }

        })
        return res.status(200).send({
            status: 1,
            message: 'Departamento deletado com sucesso!!!',
            departamento
        })
    }
}