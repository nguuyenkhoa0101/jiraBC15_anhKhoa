import React, {useEffect} from 'react'
// import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react'
import  { withFormik} from 'formik'
import * as Yup from 'yup'
import { connect,useSelector, useDispatch } from 'react-redux'
 function CreateProject(props) {
   const arrProjectCategory = useSelector(state=>state.ProjectCategoryReducer.arrProjectCategory);
   const dispatch=  useDispatch();
   
   const {
     values,
     touched,
     errors, 
     handleChange,
     handleBlur,
     handleSubmit,
     setFieldValue,
   } =props;
   useEffect (() =>{
    dispatch({type:'GET_ALL_PROJECT_CATEGORY_SAGA'})
   },[]);

  // const editorRef = useRef(null);
  //  const log = () => {
  //    if (editorRef.current) {
  //      console.log(editorRef.current.getContent());
  //    }
  //  };
  const handleEditorChange = (content , editor)=>{
    console.log('content was updated', content);
    console.log('editor was updated', editor);
    setFieldValue('description', content)
  }
  
  return (
    <div className="container m-5">
      <h3 className="tex-center">Create Project</h3>
      <form className="container" onSubmit={handleSubmit}  onChange={handleChange }>
        <div className="form-group">
          <p>Name</p>
          <input className="form-control" name="projectName" />
        </div>
        <div className="form-group">
          <p>Description</p>
          {/* <input className="form-control" name="description" /> */}
          <Editor
            name="description"
            // onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=""
            init={{
              selector:'textarea#myTextArea',
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
           onEditorChange={handleEditorChange}
          />
          {/* <button onClick={log}>Log editor content</button> */}
        </div>
        <div className="form-group">
          <select name="categoryId" className="form-control" onChange={handleChange }>
            {arrProjectCategory.map((item, index) =>{
              return <option value={item.id} key={index}>{item.projectCategoryName}</option>
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Create Project
        </button>
      </form>
    </div>
  )
}

const createProjectForm = withFormik({
  enableReinitialize:true,

  mapPropsToValues: (props)=>{
    return{
    projectName:'',
    description:'',
    categoryId:props.arrProjectCategory[0]?.id,
    alias:''
    }

  },
  validationSchema:Yup.object().shape({

  }),
  handleSubmit:(values, {props, setSubmitting}) =>{
    // console.log(values);
    props.dispatch({
      type:'CREATE_PROJECT_SAGA', newProject:values
    })
  },
  displayName:'createProjectFormik',

})(CreateProject);

const mapStateToProps = (state)=>({
  arrProjectCategory:state.ProjectCategoryReducer.arrProjectCategory
})

export default connect()(createProjectForm)
