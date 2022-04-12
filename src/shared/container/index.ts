import { container, delay } from "tsyringe";


// INTERFACES
import { IUsersRepositories } from "../../modules/accounts/repositories/IUsersRepositories";
import { IUseTokensRepositories } from "../../modules/accounts/repositories/IUseTokensRepositories";
import { ICidadesRepositories } from "../../modules/cidades/repositories/ICidadesRepositories";
import { IEventosRepositories } from "../../modules/eventos/repositories/IEventosRepositories";
import { IEventosSetorLoteRepositories } from "../../modules/eventos/repositories/IEventosSetorLoteRepositories";
import { IEventosSetorRepositories } from "../../modules/eventos/repositories/IEventosSetorRepositories";
import { IEventosVendasRepositories } from "../../modules/eventos/repositories/IEventosVendasRepositories";
import { IBannersRepositories } from "../../modules/banners/repositories/IBannersRepositories";


// REPOSITORIES
import { UsersRepositories } from "../../modules/accounts/infra/typeorm/repositories/UsersRepositories";
import { UserTokensRepositories } from "../../modules/accounts/infra/typeorm/repositories/UserTokensRepositories";
import { CidadesRepositories } from "../../modules/cidades/infra/typeorm/repositories/CidadesRepositories";
import { EventosRepositories } from "../../modules/eventos/infra/typeorm/repositories/EventosRepositories";
import { EventosSetorLoteRepositories } from "../../modules/eventos/infra/typeorm/repositories/EventosSetorLoteRepositories";
import { EventosSetorRepositories } from "../../modules/eventos/infra/typeorm/repositories/EventosSetorRepositories";
import { EventosVendasRepositories } from "../../modules/eventos/infra/typeorm/repositories/EventosVendasRepositories";
import { BannersRepositories } from "../../modules/banners/infra/typeorm/repositories/BannersRepositories";

import { IDateProvider } from "./providers/DateProvider/IDateProvider";
import { DaysJsDateProvider } from "./providers/DateProvider/implementations/DayjsDateProvider";

import { IStorageProvider } from "./providers/StorageProvider/IStorageProvider";
import { LocalStorageProvider } from "./providers/StorageProvider/implementations/LocalStorageProvider";
import { ICurrencyFormatterProvider } from "./providers/CurrencyFormatter/ICurrencyFormatterProvider";
import { CurrencyFormatterProvider } from "./providers/CurrencyFormatter/implementations/CurrencyFormatterProvider";

container.registerSingleton<IUsersRepositories>("UsersRepositories", delay(() => UsersRepositories));
container.registerSingleton<IUseTokensRepositories>("UserTokensRepositories", delay(() => UserTokensRepositories));
container.registerSingleton<ICidadesRepositories>("CidadesRepositories", delay(() => CidadesRepositories));
container.registerSingleton<IEventosRepositories>("EventosRepositories", delay(() => EventosRepositories));
container.registerSingleton<IEventosSetorLoteRepositories>("EventosSetorLoteRepositories", delay(() => EventosSetorLoteRepositories));
container.registerSingleton<IEventosSetorRepositories>("EventosSetorRepositories", delay(() => EventosSetorRepositories));
container.registerSingleton<IEventosVendasRepositories>("EventosVendasRepositories", delay(() => EventosVendasRepositories));
container.registerSingleton<IBannersRepositories>("BannersRepositories", delay(() => BannersRepositories));

container.registerSingleton<IDateProvider>("DaysJsDateProvider", delay(() => DaysJsDateProvider));
container.registerSingleton<ICurrencyFormatterProvider>("CurrencyFormatterProvider", delay(() => CurrencyFormatterProvider));

const diskStorage = {
  local: LocalStorageProvider
};
container.registerSingleton<IStorageProvider>("StorageProvider", delay(() => diskStorage[process.env.DISK]));
