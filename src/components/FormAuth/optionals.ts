import validatePatterns from '../../config/validate-patterns';

export const optionalInputs = {
  fullName: {
    id: 'full-name',
    label: 'Фамилия Имя Отчество',
  },
  passport: {
    id: 'passport',
    label: 'Ввелите пасспорт',
    validity: [{ pattern: validatePatterns.passport, msg: 'Неверный формат пасспорта' }],
  },
  email: {
    id: 'email',
    label: 'eMail',
    validity: [{ pattern: validatePatterns.mail, msg: 'email не верный' }],
    isChecked: true,
    isIlluminationFocus: true
  },
};