import createActionTypes, {
  ASYNC,
  SYNC,
} from './create-actions';

describe('Action Types Creator', () => {
  it('Should accept a namespace', () => {
    const actual = createActionTypes('foo', {
      SAMPLE_ACTION: SYNC,
    });
    expect(actual.SAMPLE_ACTION).toEqual('@@TED/foo/SAMPLE_ACTION');
  });
  it('Should proxy actions', () => {
    const actual = createActionTypes('foo', {
      SAMPLE_ACTION: SYNC,
      SAMPLE_FLOPPY_ACTION: ASYNC,
    });
    expect(actual).toEqual({
      SAMPLE_ACTION: '@@TED/foo/SAMPLE_ACTION',
      SAMPLE_FLOPPY_ACTION: {
        ALL: [
          '@@TED/foo/SAMPLE_FLOPPY_ACTION/REQUESTED',
          '@@TED/foo/SAMPLE_FLOPPY_ACTION/FULFILLED',
          '@@TED/foo/SAMPLE_FLOPPY_ACTION/REJECTED',
        ],
        REQUESTED: '@@TED/foo/SAMPLE_FLOPPY_ACTION/REQUESTED',
        FULFILLED: '@@TED/foo/SAMPLE_FLOPPY_ACTION/FULFILLED',
        REJECTED: '@@TED/foo/SAMPLE_FLOPPY_ACTION/REJECTED',
      },
    });
  });
});
