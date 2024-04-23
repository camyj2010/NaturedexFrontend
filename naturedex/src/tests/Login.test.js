const { Builder, By, Key, until } = require('selenium-webdriver');

// Configura el navegador y abre la página web
const driver = new Builder().forBrowser('chrome').build();

beforeAll(async () => {
  await driver.get('http://localhost:3000/login'); // Reemplaza con la URL de tu aplicación
});

afterEach(async () => {
    await driver.navigate().refresh();
});

afterAll(async () => {
  await driver.quit();
});

test('Handle login failure', async () => {
    // Encuentra los elementos de entrada y el botón de inicio de sesión
    const emailInput = await driver.findElement(By.id('email'));
    const passwordInput = await driver.findElement(By.id('password'));
    const loginButton = await driver.findElement(By.xpath('//button[contains(text(), "Log in")]'));
  
    // Ingresa un correo electrónico y contraseña incorrectos
    await emailInput.sendKeys('wrong@example.com');
    await passwordInput.sendKeys('wrongpassword');
  
    // Haz clic en el botón de inicio de sesión
    await loginButton.click();
  
    // Espera hasta que la URL cambie a la página de destino o aparece un mensaje de error
    await driver.wait(until.urlIs('http://localhost:3000/login'), 5000);
    
    // Verifica si se ha iniciado sesión correctamente
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toBe('http://localhost:3000/login');
  });

test('Log in user', async () => {
  // Encuentra los elementos de entrada y el botón de inicio de sesión
  const emailInput = await driver.findElement(By.id('email'));
  const passwordInput = await driver.findElement(By.id('password'));
  const loginButton = await driver.findElement(By.xpath('//button[contains(text(), "Log in")]'));

  // Ingresa el correo electrónico y la contraseña
  await emailInput.sendKeys('manuela@gmail.com');
  await passwordInput.sendKeys('12345');

  // Haz clic en el botón de inicio de sesión
  await loginButton.click();

  // Espera hasta que la URL cambie a la página de destino o aparece un mensaje de error
  await driver.wait(until.urlIs('http://localhost:3000/my_entries'), 5000);
  
  // Verifica si se ha iniciado sesión correctamente
  const currentUrl = await driver.getCurrentUrl();
  expect(currentUrl).toBe('http://localhost:3000/my_entries');
});