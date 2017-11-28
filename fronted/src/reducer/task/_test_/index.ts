for(let i = 0; i < 100; i += 1) {
  const actionG = (type) => {
    type,
    ...RandomObjectG(),
  };
  const state = RandomBoolG();
  const toEqual = (action) => expect(modalVisible(state, action)).toBe(state);
  const toBeTrue = (action) => expect(modalVisible(state, action)).toBe(true);
  const toBeflse = (action) => expect(modalVisible(state, action)).toBe(false);
  describe(`modalVisible ${i} `, () => {
    it(`initial`, () => {
      const action = actionG(TP_INIT);
      toBeflse(action);
    });
    it(`TA_TASK_ONCLICK`, () => {
      const action = actionG(TA_TASK_ONCLICK);
      toBeTrue(action);
    });
    it(`TA_CLOSE_MODAL_ONCLICK`, () => {
      const action = actionG(TA_CLOSE_MODAL_ONCLICK);
      toBeflse(action);
    });
    it(`TA_MODAL_ONCONFIRM`, () => {
      const action = actionG(TA_MODAL_ONCONFIRM);
      toBeflse(action);
    });
    it(`TA_MODAL_ONNOTKEEP`, () => {
      const action = actionG(TA_MODAL_ONNOTKEEP);
      toBeflse(action);
    });
    it(`TA_MODAL_ONKEEP`, () => {
      const action = actionG(TA_MODAL_ONKEEP);
      toBeflse(action);
    });
    it(`TA_COLLAPSE_ONCLICK`, () => {
      const action = actionG(TA_COLLAPE_ONCLICK);
      toBeflse(action);
    });
    it(`TA_NODE_ONCLICK`, () => {
      const action = actionG(TA_NODE_ONCLICK);
      toBeflse(action);
    });
    it(`TA_CLEAR_SELECTED_SEARCH`, () => {
      const action = actionG(TA_CLEAR_SELECTED_SEARCH);
      toBeflse(action);
    });
    it(`TA_CLEAR_ALL_SEARCH`, () => {
      const action = actionG(TA_CLEAR_ALL_SEARCH);
      toBeflse(action);
    });
    it(`TA_FAST_SEARCH_ONCLICK`, () => {
      const action = actionG(TA_FAST_SEARCH_ONCLICK);
      toBeflse(action);
    });
    it(`TA_ADVANCED_SEARCH_ONCONFIRM`, () => {
      const action = actionG(TA_ADVANCED_SEARCH_ONCONFIRM);
      toBeflse(action);
    });
    it(`TA_ADVANCED_SEARCH_ONCANCEL`, () => {
      const action = actionG(TA_ADVANCED_SEARCH_ONCANCEL);
      toBeflse(action);
    });
    it(`TA_TAB_ONCLICK`, () => {
      const action = actionG(TA_ADVANCED_SEARCH_ONCANCEL);
      toBeflse(action);
    });
    it(`TA_ADVANCED_SEARCH_ONCLICK`, () => {
      const action = actionG(TA_ADVANCED_SEARCH_ONCANCEL);
      toBeflse(action);
    });
    it(`TA_TASK_SORT_TIME_FORWARD`, () => {
      const action = actionG(TA_ADVANCED_SEARCH_ONCANCEL);
      toBeflse(action);
    });
    it(`TA_TASK_SORT_TIME_BACKWARD`, () => {
      const action = actionG(TA_ADVANCED_SEARCH_ONCANCEL);
      toBeflse(action);
    });
    it(`TA_CHANGE_PAGE`, () => {
      const action = actionG(TA_ADVANCED_SEARCH_ONCANCEL);
      toBeflse(action);
    });
    it(`TA_ADD_TASK_ONCLICK`, () => {
      const action = actionG(TA_ADVANCED_SEARCH_ONCANCEL);
      toBeTrue(action);
    });
    it(`TA_DELETE_TASK_ONCLICK`, () => {
      const action = actionG(TA_ADVANCED_SEARCH_ONCANCEL);
      toBeflse(action);
    });
  });
}
