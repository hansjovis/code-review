import Range from "./Range";

class Comment {
  constructor( code, author ) {
    this.author = author;
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

  get copy() {
    const copy = new Comment( this.code, this.author );
    
    copy.lineNumberRange = this.lineNumberRange.copy;
    copy.comment = this.comment;
    copy.suggestedChange = this.suggestedChange;

    return copy;
  }

  set lineStart( newLineStart ) {
    this.lineNumberRange.start = newLineStart;
  }

  set lineEnd( newLineEnd ) {
    this.lineNumberRange.end = newLineEnd;
  }
}

export default Comment;