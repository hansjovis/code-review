

class Range {
  constructor( start = 0, end = 0 ) {
    this.start = start;
    this.end = end;
  }

  get length() {
    return Math.abs( this.end - this.start );
  }
}

export default Range;