import * as dotenv from 'dotenv';
import { AppContainer } from './common/shared/component/app-container';
import { AppEnvVariables } from './common/shared/component/app-env-variables';
import path from 'path';

dotenv.config({ path: path.join(__dirname, `../../.env`) });

class appInit extends AppContainer {
  
  constructor(
    servicePort: AppEnvVariables = new AppEnvVariables((process.env))) {
    super("Storefront_api", servicePort);
  }

  public override async listen(): Promise<void> {
    // const readerController = new ReaderController(this.timeDataService);
    // this.app.use(readerController.router);
    super.listen();
  }
}

const runApp = new appInit();
runApp.listen();