import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQ = [...questions];
    const filterQ = publishedQ.filter((qs: Question): boolean => qs.published);
    return filterQ;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const EQ = [...questions]; // Shallow copy would have been fine as well, thought it was needed.
    const filterEQ = EQ.filter(
        (fq: Question) =>
            fq.body !== "" || fq.expected !== "" || fq.options.length > 0
    );
    return filterEQ;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundQuestion = questions.find(
        (question: Question) => question.id === id
    );
    return foundQuestion || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const copyRQ = [...questions];
    const filterRQ = copyRQ.filter((rq: Question) => rq.id !== id);
    return filterRQ;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const GN = questions.map((gn: Question): string => gn.name);
    return GN;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const p = questions.map((pts: Question): number => pts.points);
    const sum = p.reduce((total: number, num: number) => total + num, 0);
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let totalPoints = 0;

    questions.forEach((question: Question) => {
        if (question.published) {
            totalPoints += question.points;
        }
    });

    return totalPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const CSV = questions.map(
        (f: Question): string =>
            f.id.toString() +
            "," +
            f.name +
            "," +
            f.options.length.toString() +
            "," +
            f.points.toString() +
            "," +
            f.published.toString()
    );
    const CSVstring = CSV.join("\n");
    return "id,name,options,points,published\n" + CSVstring;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const ans: Answer[] = questions.map((aws: Question) => {
        const a: Answer = {
            questionId: aws.id,
            text: "",
            submitted: false,
            correct: false
        };
        return a;
    });
    return ans;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const deepC = questions.map((de: Question): Question => {
        return {
            ...de,
            published: true
        };
    });
    return deepC;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const firstQ = questions[0];
    const same = questions.every(
        (s: Question): boolean => s.type === firstQ.type
    );
    return same;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQ = makeBlankQuestion(id, name, type);
    const updateQ = [...questions, newQ];
    return updateQ;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newID = questions.map((id: Question): Question => {
        if (id.id === targetId) {
            return { ...id, name: newName };
        } else {
            return id;
        }
    });
    return newID;
    //Example of deep copy because we only want the name change that has the targetedID
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map((question: Question): Question => {
        if (question.id === targetId) {
            const updatedQuestion = { ...question, type: newQuestionType };

            if (newQuestionType !== "multiple_choice_question") {
                updatedQuestion.options = [];
            }

            return updatedQuestion;
        } else {
            return question;
        }
    });
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const t = questions.map((question: Question): Question => {
        if (question.id === targetId) {
            if (targetOptionIndex === -1) {
                return {
                    ...question,
                    options: [...question.options, newOption]
                };
            } else if (
                targetOptionIndex >= 0 &&
                targetOptionIndex < question.options.length
            ) {
                const updatedOptions = [...question.options];
                updatedOptions[targetOptionIndex] = newOption;

                return { ...question, options: updatedOptions };
            }
        }
        return question;
    });

    return t;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const duplicateQ = questions.flatMap((dup: Question) => {
        if (dup.id === targetId) {
            const newQ = duplicateQuestion(newId, dup);
            return [dup, newQ];
        }
        return [dup];
    });
    return duplicateQ;
}
