import {Statement} from "./statement";
import {verNot, str, seq, opt, per, IRunnable, tok} from "../combi";
import {Integer, MessageClass, NamespaceSimpleName} from "../expressions";
import {Version} from "../../version";
import {ParenLeft, ParenRightW} from "../tokens";

export class Report extends Statement {

  public static get_matcher(): IRunnable {
    let more = seq(tok(ParenLeft), new Integer(), tok(ParenRightW));
    let heading = str("NO STANDARD PAGE HEADING");
    let size = seq(str("LINE-SIZE"), new Integer());
    let count = seq(str("LINE-COUNT"), new Integer(), opt(more));
    let message = seq(str("MESSAGE-ID"), new MessageClass());

    let ret = seq(str("REPORT"),
                  opt(new NamespaceSimpleName()),
                  opt(per(heading, size, count, message)));

    return verNot(Version.Cloud, ret);
  }

}