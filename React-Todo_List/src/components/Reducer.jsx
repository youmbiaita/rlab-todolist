function Reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
          state.unshift({
            id: Date.now(),
            title: action.payload,
            completed: false
          });
          break;
        case 'TOGGLE_TODO':
          const todoToToggle = state.find(todo => todo.id === action.payload);
          todoToToggle.completed = !todoToToggle.completed;
          break;
        case 'DELETE_TODO':
          return draft.filter(todo => todo.id !== action.payload);
        case 'EDIT_TODO':
          const todoToEdit = state.find(todo => todo.id === action.payload.id);
          todoToEdit.editing = true;
          todoToEdit.editValue = action.payload.title;
          break;
        case 'SAVE_TODO':
          const todoToSave = state.find(todo => todo.id === action.payload.id);
          todoToSave.title = action.payload.title;
          delete todoToSave.editing;
          delete todoToSave.editValue;
          break;
        default:
          break;
      }
}

export default Reducer;