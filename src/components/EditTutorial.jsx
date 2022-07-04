import { useState, useEffect } from "react";

const EditTutorial = ({ editTutorial, editItem }) => {
  const { id, title: newTitle, description } = editItem;

  const [title, setTitle] = useState(newTitle);

  const [desc, setDesc] = useState(description);

  //? https://reactjs.org/docs/hooks-reference.html#usestate
  //! Value of state variable initialState with first render Gets the initial value of the parameter. Therefore, in this case, the first value from the prop is passed to the state. Props values that are changed later are not passed to useState.If we want to pass the values from props to useState on every change, we can use the useEffect hook like componentDidUpdate.

  //? ComponentDidUpdate: 👇
  //! Local title and desc states will be updated every time newTitle or description changes 👇
  useEffect(() => {
    setTitle(newTitle);
    setDesc(description);
  }, [newTitle, description]);

  const handleSave = (e) => {
    //! 👇 turn off automatic refresh with preventDefault()
    e.preventDefault();

    editTutorial(id, title, desc);
    setTitle("");
    setDesc("");
  };
  return (
    <div className="modal" tabIndex="-1" id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter your Description"
                value={desc || ""}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
