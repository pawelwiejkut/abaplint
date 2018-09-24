import {Issue} from "../issue";
import Position from "../position";
import {ABAPRule} from "./abap_rule";

export class SevenBitAsciiConf {
  public enabled: boolean = true;
}

export class SevenBitAscii extends ABAPRule {
  private conf = new SevenBitAsciiConf();

  public getKey(): string {
    return "7bit_ascii";
  }

  public getDescription(): string {
    return "Contains non 7 bit ascii character";
  }

  public getConfig() {
    return this.conf;
  }

  public setConfig(conf) {
    this.conf = conf;
  }

  public runParsed(file) {
    let output: Array<Issue> = [];

    let rows = file.getRawRows();

    for (let i = 0; i < rows.length; i++) {
      if (/^[\u0000-\u007f]*$/.test(rows[i]) === false) {
        let issue = new Issue(this, file, new Position(i + 1, 1));
        output.push(issue);
      }
    }

    return output;
  }
}