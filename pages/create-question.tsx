import React from 'react'
import RichTextEditor from '../components/forms/RichTextEditor'
import Layout from '../components/Layout'

import Greet from '../components/create-question/Greet'
import CreateQuestionForm from '../components/create-question/CreateQuestionForm'
import CrearwQuestionDropdown from '../components/create-question/CrearwQuestionDropdown'

const CreateQuestion = () => {

  return (
    <Layout bgCol='#3d3d3d' title='Create Question' noLeftbar noRightbar>

      <div className='flex flex-col px-[12px]'>

        <Greet />

        <div className='flex gap-6'>

          <div className='flex flex-col flex-[0.7]'>

            <CreateQuestionForm />

          </div>

          <div className='flex flex-col flex-[0.3]'>

            <CrearwQuestionDropdown />

          </div>

        </div>

       
      </div>
      
    </Layout>
  )
}

export default CreateQuestion
