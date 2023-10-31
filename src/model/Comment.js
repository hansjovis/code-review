import Range from "./Range";

class Comment {
  constructor( code ) {
    this.code = code;
    this.lineNumberRange = new Range();
    this.comment = "";
    this.suggestedChange = "";
  }

  get lines() {
    return this.code.specificLines( this.lineNumberRange );
  }

  get snippet() {
    return this.lines.join("\n");
  }

  get nrOfLines() {
    return this.lines.length;
  }
}

export default Comment;