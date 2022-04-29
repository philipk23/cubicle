const { body } = require('express-validator');

const repeatPasswordCheck = body('repeatPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords don\'t match!');
    }

    // Indicates the success of this synchronous custom validator
    return true;
});

module.exports = {
    repeatPasswordCheck,
}