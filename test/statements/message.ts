import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "MESSAGE 'Saved' TYPE 'S'.",
  "MESSAGE 'Fill URL' TYPE 'S' DISPLAY LIKE 'E'.",
  "MESSAGE ID msgid TYPE msgty NUMBER msgno WITH msgv1 msgv2 msgv3 msgv4 INTO lv_err.",
  "MESSAGE e800(zfoobar) INTO lv_message.",
  "message e059(0k) with 'error' raising fatal.",
];

statementType(tests, "MESSAGE", Statements.Message);