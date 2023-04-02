import * as fromFirestoreData from '../reducers/firestore-data.reducer';
import { selectFirestoreDataState } from './firestore-data.selectors';

describe('FirestoreData Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFirestoreDataState({
      [fromFirestoreData.firestoreDataFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
