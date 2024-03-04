import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { Answer } from '../entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'


const fakeAnswerRepository: AnswersRepository = {
    create: async (answer: Answer) => {
        return
    }
}

test('create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

    const answer = await answerQuestion.execute({
        questionId: '1',
        instructorId: '1',
        content: 'Nova resposta',
    })


    expect(answer.content).toEqual('Nova resposta')
})