import reducer,{getData} from './dataSlice'

describe('dataSlice', () => {
  describe('reducers', () => {
    const initialState = { isFetching:true, error:'', data: [] }

    it('sets fetching true when setData is pending', () => {
      const action = { type: getData.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ isFetching:true, error:'', data: []} );
    });

    it('sets the data and fetching when setData is fulfilled', () => {
      const action = { type: getData.fulfilled.type, payload: [{
          id: 815,
          firstName: "Glenderee",
          lastName: "Leite",
          email: "SOwlett@tortor.org",
          phone: "(115)168-3809",
          adress: {
            streetAddress: "6594 Nec Ct",
            city: "Decatur",
            state: "TN",
            zip: "14087"
          },
          description: "magna etiam sit suspendisse odio nec etiam odio mattis orci elit nullam tortor id neque massa dolor mattis magna magna scelerisque morbi aliquam sit lacus velit elit in amet egestas sagittis hendrerit"
        }],isFetching:false };
      const state = reducer(initialState, action);
      expect(state).toEqual({ isFetching:false, error:'', data: [{
          id: 815,
          firstName: "Glenderee",
          lastName: "Leite",
          email: "SOwlett@tortor.org",
          phone: "(115)168-3809",
          adress: {
            streetAddress: "6594 Nec Ct",
            city: "Decatur",
            state: "TN",
            zip: "14087"
          },
          description: "magna etiam sit suspendisse odio nec etiam odio mattis orci elit nullam tortor id neque massa dolor mattis magna magna scelerisque morbi aliquam sit lacus velit elit in amet egestas sagittis hendrerit"
        }]});
    });


    it('sets error when setData is rejected', () => {
      const action = { type: getData.rejected.type, payload:'some error'};
      const state = reducer(initialState, action);
      expect(state).toEqual({  isFetching:true, error:'some error', data: [] });
    });
  });

});
