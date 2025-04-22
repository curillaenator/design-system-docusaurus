import Cursor, { Cursorable, Options } from '../Cursor';

const INIT: Options = { start: 2, current: 4, end: 9 };

describe('Cursorable', () => {
  it('инициализируется', () => {
    expect(() => new Cursor(INIT)).not.toThrow();
  });

  it('выбрасывает ошибку если start больше end', () => {
    expect(() => new Cursor({ start: 8, current: 10, end: 4 })).toThrow();
  });

  describe('после инициализации', () => {
    it('сохраняет переданные опции', () => {
      const runner = new Cursor(INIT);

      expect(runner.start).toBe(INIT.start);
      expect(runner.end).toBe(INIT.end);
      expect(runner.current).toBe(INIT.current);
    });

    it('заменяет current значением start, когда current < start', () => {
      const BAD_CURRENT_START: Options = { start: 2, current: 0, end: 9 };

      const runner = new Cursor(BAD_CURRENT_START);

      expect(runner.current).toBe(BAD_CURRENT_START.start);
    });

    it('заменяет current значением end, когда current > end', () => {
      const BAD_CURRENT_END: Options = { start: 2, current: 11, end: 9 };

      const runner = new Cursor(BAD_CURRENT_END);

      expect(runner.current).toBe(BAD_CURRENT_END.end);
    });

    it('обновляет индекс start', () => {
      const runner = new Cursor(INIT);

      runner.start = 3;
      expect(runner.start).toBe(3);
    });

    it('обновляет индекс end', () => {
      const runner = new Cursor(INIT);

      runner.end = 12;
      expect(runner.end).toBe(12);
    });

    let runner: Cursorable;
    beforeEach(() => {
      runner = new Cursor(INIT);
    });

    describe('#go', () => {
      it('переводит на новый индекс', () => {
        runner.go(6);
        expect(runner.current).toBe(6);

        runner.go(2);
        expect(runner.current).toBe(2);
      });

      it('переводит на индекс start, если переданный индекс меньше start', () => {
        runner.go(1);
        expect(runner.current).toBe(INIT.start);
      });

      it('переводит на индекс end, если переданный индекс больше end', () => {
        runner.go(13);
        expect(runner.current).toBe(INIT.end);
      });
    });

    describe('#next', () => {
      it('переводит на следующий индекс', () => {
        runner.next();
        expect(runner.current).toBe(INIT.current + 1);
      });

      it('переводит на индекс start, если индекс current равен индексу end', () => {
        runner.go(INIT.end);
        runner.next();
        expect(runner.current).toBe(INIT.start);
      });
    });

    describe('#prev', () => {
      it('переводит на предыдущий индекс', () => {
        runner.prev();
        expect(runner.current).toBe(INIT.current - 1);
      });

      it('переводит на индекс end, если индекс current равен индексу start', () => {
        runner.go(INIT.start);
        runner.prev();
        expect(runner.current).toBe(INIT.end);
      });
    });

    describe('#first', () => {
      it('переводит на индекс start', () => {
        runner.first();
        expect(runner.current).toBe(INIT.start);
      });

      it('переводит на индекс start после его обновления', () => {
        const newStart = INIT.start - 2;

        runner.start = newStart;
        runner.first();
        expect(runner.current).toBe(newStart);
      });
    });

    describe('#last', () => {
      it('переводит на индекс end', () => {
        runner.last();
        expect(runner.current).toBe(INIT.end);
      });

      it('переводит на индекс end после его обновления', () => {
        const newEnd = INIT.end - 3;

        runner.end = newEnd;
        runner.last();
        expect(runner.current).toBe(newEnd);
      });
    });
  });
});
