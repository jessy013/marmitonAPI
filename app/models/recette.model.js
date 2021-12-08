module.exports = (sequelize, Sequelize) => {
    const Recette = sequelize.define("recettes", {
        titre: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        resume: {
            type: Sequelize.STRING
        }
    });
    return Recette;
}