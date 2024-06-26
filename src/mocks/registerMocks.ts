import { handlers } from './handlers';
const { setupWorker } = require("msw/browser");
 
const registerMocks = () => {
  const worker = setupWorker(...handlers);
  return worker.start();
}
 
export default registerMocks;