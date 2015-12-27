import { Check } from "./check";
import File from "../file";
import Report from "../report";
import Issue from "../issue";
import * as Statements from "../statements/statements";

export class Check01 implements Check {

    constructor(private report: Report) {

    }

    public get_key(): string {
        return "01";
    }

    public get_description(): string {
        return "Start statement at tab position";
    }

    public run(file: File) {
        for (let statement of file.get_statements()) {
            if (statement instanceof Statements.Comment) {
                continue;
            }

            let token = statement.get_tokens()[0];
            if ((token.get_col() - 1) % 2 !== 0) {
                let issue = new Issue(this, token.get_row(), token.get_col(), file);
                this.report.add(issue);
            }
        }
    }

}