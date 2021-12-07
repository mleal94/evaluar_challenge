const REGEX = {
  NAME: /^[A-Za-zÁÉÍÓÚñáéíóúÑ]([A-Za-zÁÉÍÓÚñáéíóúÑ]|\s[A-Za-zÁÉÍÓÚñáéíóúÑ]){2,150}$/i,
  NUMBER: /^[0-9]*$/,
};

module.exports = REGEX;
