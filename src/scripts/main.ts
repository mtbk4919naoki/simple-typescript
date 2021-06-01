import defaultImport, {defaultImport2, namedImport} from "./modules/defaultImport";
import * as hoge from "./modules/namedImport";
import "./modules/import";
import "./modules/first";

defaultImport();
defaultImport2();
hoge.namedImport();
hoge.namedImport2();
namedImport();