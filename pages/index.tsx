
import Layout from '../components/Layout';
import QuestionFiters from '../components/homepage/QuestionFiters';

import apolloClient from '../lib/apollo';
import { GET_ALL_QQUESTIONS } from '../graphql/queries/QuestionsQueries';

import QuestionItem from '../components/question/QuestionItem';
import { useQuery } from '@apollo/client';

import { IQuetion } from '../models/types';
import { useEffect, useState } from 'react';

const  Home: React.FC<{questions: IQuetion[]}> = ({questions}) => {

  const [allQuests, setAllQuests] = useState<IQuetion[]>(questions)

  const {data} = useQuery(GET_ALL_QQUESTIONS)

  useEffect(() => {
    if (data) {
      setAllQuests(data.getAllQuestions)
    }
  }, [data])

  return (
    <Layout title='Stack UnderLow'>

     <div className='flex flex-col'>

      <QuestionFiters title='Questions' items={['creation Date', 'popularuty', 'raiting']} />

      <div className='flex flex-col'>

        {
          allQuests.map(q => (
            <QuestionItem key={q.id} question={q} />
          ))
        }

      </div>

     </div>

    </Layout>
  );
}



export async function getServerSideProps (context) {
  const quests = await apolloClient.query<{getAllQuestions: IQuetion[]}>({query: GET_ALL_QQUESTIONS})

  return {
    props: {
      questions: quests.data.getAllQuestions
    }
  }
}


export default Home