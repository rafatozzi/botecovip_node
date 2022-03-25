import { container, delay } from "tsyringe";


// INTERFACES
import { IUsersRepositories } from "../../modules/accounts/repositories/IUsersRepositories";
import { IUseTokensRepositories } from "../../modules/accounts/repositories/IUseTokensRepositories";


// REPOSITORIES
import { UsersRepositories } from "../../modules/accounts/infra/typeorm/repositories/UsersRepositories";
import { UserTokensRepositories } from "../../modules/accounts/infra/typeorm/repositories/UserTokensRepositories";


import { IDateProvider } from "./providers/DateProvider/IDateProvider";
import { DaysJsDateProvider } from "./providers/DateProvider/implementations/DayjsDateProvider";

import { IStorageProvider } from "./providers/StorageProvider/IStorageProvider";
import { LocalStorageProvider } from "./providers/StorageProvider/implementations/LocalStorageProvider";
import { ICurrencyFormatterProvider } from "./providers/CurrencyFormatter/ICurrencyFormatterProvider";
import { CurrencyFormatterProvider } from "./providers/CurrencyFormatter/implementations/CurrencyFormatterProvider";


container.registerSingleton<IUsersRepositories>("UsersRepositories", delay(() => UsersRepositories));
container.registerSingleton<IUseTokensRepositories>("UserTokensRepositories", delay(() => UserTokensRepositories));

container.registerSingleton<IDateProvider>("DaysJsDateProvider", delay(() => DaysJsDateProvider));
container.registerSingleton<ICurrencyFormatterProvider>("CurrencyFormatterProvider", delay(() => CurrencyFormatterProvider));

const diskStorage = {
  local: LocalStorageProvider
};
container.registerSingleton<IStorageProvider>("StorageProvider", delay(() => diskStorage[process.env.DISK]));
