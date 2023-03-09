const { validateParameters, validateEveryParameter, formatEntity } = require("../../app_api/helpers/Validations");

describe("Validations test", () => {
  test("Validate body request parameters", () => {
    const parameters = {
      startId: 1,
      endId: 3,
    };

    const resValidation = validateParameters(parameters);
    expect(resValidation).toBeTruthy();
  });

  test("Validate wrong body request parameters", () => {
    const parameters = {};

    const resValidation = validateParameters(parameters);
    expect(resValidation).toBeFalsy();
  });

  test("Validate wrong body request parameters when startId greater than endId ", () => {
    const parameters = {
      startId: 10,
      endId: 3,
    };

    const resValidation = validateParameters(parameters);
    expect(resValidation).toBeFalsy();
  });

  test("Validate the correctness in a particular parameter ", () => {
    const parameter = 2;

    const resValidation = validateEveryParameter(parameter);
    expect(resValidation).toBeTruthy();
  });

  test("Validate when a parameter is wrong ", () => {
    const parameter = 0;

    const resValidation = validateEveryParameter(parameter);
    expect(resValidation).toBeFalsy();
  });

  test("formatEntity should validate and returned the formated object", () => {
    const originEntity = {
      entityId: 1,
      name: "Tuya",
      identificationNumber: "123456789",
      attributeValidator: null,
      expirationDate: "2030-10-27",
      contactName: "Ana Maria Palacio",
      contactMail: "APalacioH@tuya.com.co",
      ipAddress: "",
      logo: "",
      domain: null,
      notificationUserActivation:
        '{"ENR":[{"notification":"email","channel":"WEBAPP","identityLevel":0,"templateId":44,"logo":"logo_entidad_tuya.png","gif":"","logoSuper":"","activated":true}],"TRX":[{"notification":"email","channel":"WEBAPP","identityLevel":0,"templateId":44,"logo":"","gif":"","logoSuper":"","activated":true}]}',
      searchFilter: null,
    };

    const { isValid, entity } = formatEntity(originEntity);

    expect(isValid).toBeTruthy();
    expect(entity).toEqual({
      entityId: expect.any(Number),
      name: expect.any(String),
      identificationNumber: expect.any(String),
      expirationDate: expect.any(String),
      contactName: expect.any(String),
      contactMail: expect.any(String),
      logo: expect.any(String),
    });
  });

  test("formatEntity should validate when is a wrong object", () => {
    const originEntity = {
      entityId: 1,
      name: "Tuya",
      identificationNumber: "123456789",
      attributeValidator: null,
      expirationDate: "2030-10-27",
      contactName: "Ana Maria Palacio",
      contactMail: null,
      ipAddress: "",
      logo: "",
      domain: null,
      notificationUserActivation:
        '{"ENR":[{"notification":"email","channel":"WEBAPP","identityLevel":0,"templateId":44,"logo":"logo_entidad_tuya.png","gif":"","logoSuper":"","activated":true}],"TRX":[{"notification":"email","channel":"WEBAPP","identityLevel":0,"templateId":44,"logo":"","gif":"","logoSuper":"","activated":true}]}',
      searchFilter: null,
    };

    const { isValid, entity } = formatEntity(originEntity);

    expect(isValid).toBeFalsy();
  });
});
