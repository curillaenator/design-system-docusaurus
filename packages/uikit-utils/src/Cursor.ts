export interface Cursorable {
  prev: () => void;
  next: () => void;
  first: () => void;
  last: () => void;
  go: (targetIndex: number) => void;
  start: number;
  current: number;
  end: number;
}

export interface Options {
  start: number;
  current: number;
  end: number;
}

export default class Cursor implements Cursorable {
  private _start;

  private _current;

  private _end;

  constructor(options: Options) {
    const { start, current, end } = options;

    if (start > end) throw new Error('start должен быть меньше end');

    this._start = start;
    this._end = end;

    if (current < start) {
      this._current = start;
    } else if (current > end) {
      this._current = end;
    } else {
      this._current = current;
    }
  }

  go = (target: number) => {
    if (target < this._start) {
      this._current = this._start;
    } else if (target > this._end) {
      this._current = this._end;
    } else {
      this._current = target;
    }
  };

  first = () => {
    this.go(this._start);
  };

  last = () => {
    this.go(this._end);
  };

  prev = () => {
    if (this._current === this._start) {
      this.last();
    } else {
      this.go(this._current - 1);
    }
  };

  next = () => {
    if (this._current === this._end) {
      this.first();
    } else {
      this.go(this._current + 1);
    }
  };

  set start(newStart: number) {
    this._start = newStart;
  }

  get start() {
    return this._start;
  }

  get current() {
    return this._current;
  }

  set end(newEnd: number) {
    this._end = newEnd;
  }

  get end() {
    return this._end;
  }
}
