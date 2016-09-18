import { Statement } from "./statement";
import * as Combi from "../combi";
import * as Reuse from "./reuse";

let str  = Combi.str;
let seq  = Combi.seq;
let alt  = Combi.alt;
let opt  = Combi.opt;

export class Data extends Statement {

  public static get_matcher(): Combi.IRunnable {
    let start = alt(str("CLASS-DATA"), str("DATA"));

    let simple = seq(opt(new Reuse.FieldLength()),
                     opt(new Reuse.Type()),
                     opt(str("READ-ONLY")),
                     opt(new Reuse.Value()));

    let initial = seq(str("INITIAL SIZE"), new Reuse.Integer());

    let table = seq(new Reuse.TypeTable(),
                    opt(str("READ-ONLY")),
                    opt(initial));

    return seq(start, new Reuse.SimpleName(), alt(simple, table));
  }

}