const { Model, DataTypes } = require('sequelize')

class Departamentos extends Model {
    static init(sequelize) {
        super.init({
            dep_nome: DataTypes.STRING,
            dep_local: DataTypes.STRING,
            dep_responsavel: DataTypes.STRING,
        }, {
            sequelize,
            tableName: "departamentos"
        })
        return this
    }

    static associate(models){
        this.hasMany(models.Empregados, {foreignKey: 'departamento_id', as: 'departamento'})
    }
}
 module.exports = Departamentos