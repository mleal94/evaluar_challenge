const CustomErrors = {
  MISSING_NAME_ERROR: {
    MESSAGE: 'The name is a mandatory',
  },
  MISSING_PASSWORD_ERROR: {
    MESSAGE: 'The password is a mandatory',
  },
  MISSING_EMAIL_ERROR: {
    MESSAGE: 'The email is a mandatory',
  },
  WRONG_DATATYPE_ERROR: {
    MESSAGE: 'The age must be a number',
  },
  WRONG_DATATYPE_PERSON_ID: {
    MESSAGE: 'The Person ID must be a number',
  },
  WRONG_VALUE_NAME_ERROR: {
    MESSAGE: 'The name must be only letters',
  },
  WRONG_VALUE_LASTNAME_ERROR: {
    MESSAGE: 'The lastname must be only letters',
  },
  MISSING_LASTNAME_ERROR: {
    MESSAGE: 'The lastname is a mandatory path',
  },
  MISSING_GENDER_ERROR: {
    MESSAGE: 'The gender is a mandatory path',
  },
  EXIST_EMAIL_ERROR: {
    MESSAGE: 'This email is used by other user',
  },
  MISSING_TOKEN_ERROR: {
    MESSAGE: 'No token provided',
  },
  INVALID_TOKEN_ERROR: {
    MESSAGE: 'Invalid token provided',
  },
  MISSING_PASSWORD_ERROR: {
    MESSAGE: 'The password is a mandatory path',
  },
  MISSING_AVATAR_ERROR: {
    MESSAGE: 'The avatar is a mandatory path',
  },
  PASSWORD_LENGTH_ERROR: {
    MESSAGE: 'The password must be at least 4 characters',
  },
  NOT_EQUALS_PASSWORD_ERROR: {
    MESSAGE: 'Passwords do not match',
  },

  MISSING_IDENTIFIER_ERROR: {
    MESSAGE: 'The identifier must be provided for the authentication',
  },
  USER_NOT_FOUND_ERROR: {
    MESSAGE: 'User not found',
  },
  PERSON_NOT_FOUND_ERROR: {
    MESSAGE: 'Person not found',
  },

  NOT_VALID_ID_ERROR: {
    MESSAGE: 'Not valid id',
  },
  MISSING_ANIMAL_TO_BUY: {
    MESSAGE: 'The animal must be specified',
  },
  MISSING_PET_NAME_TO_BUY: {
    MESSAGE: 'The pet name must be specified',
  },
  USER_CREATION_ERROR: {
    MESSAGE: 'Something was wrong in user creation',
  },
  BREED_DUPLICATION_ERROR: {
    MESSAGE: 'This animal breed already exist',
  },

};

module.exports = CustomErrors;
