const {Model, DataTypes} = require ('sequelize')

class Empregados extends Model {
    static init (sequelize){
        super.init ({
            departamento_id: DataTypes.INTEGER,
            emp_nome: DataTypes.STRING,
            emp_funcao: DataTypes.STRING,
            emp_turno: DataTypes.STRING,
            emp_sexo: DataTypes.STRING,
            emp_data_admissao: DataTypes.STRING
        },{
            sequelize,
            tableName: 'empregados',
        })
        return this

    }
    static associate (models){
        this.belongsTo(models.Departamentos, {foreignKey: 'departamento_id', as: 'departamentos'})
    }
}
module.exports = Empregados