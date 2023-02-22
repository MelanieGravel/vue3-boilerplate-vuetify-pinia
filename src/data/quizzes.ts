import { Quizz, QuizzItem } from '../models/quizz.model';

const quizzes: { [index: string]: Quizz } = {
  aws: {
    title: 'AWS Cloud Practitioner',
    questions: [],
  },
  atlassian: {
    title: 'Atlassian ACP-120',
    questions: [
      {
        question: 'Ann is a Jira administrator.',
        answers: [
          'She can grant Jira administrator privileges to another user.',
          'She can remove herself as a Jira administrator.',
          'She can add Jira administrators to project roles.',
          'She can add Jira administrators to groups.',
          'She can add regular users to the Jira site.',
        ],
        goodAnswerIndexes: [2],
        explanation: 'Only org admins can grant or remove product access. ' +
          'Only org admins can manage groups. Only org admins can add users. Jira admins can add anyone to project roles.',
      },
      {
        question: 'Amy has access to a company-managed project with the Scrum Template. ' +
          'She needs to create custom fields, shared filters and filter subscriptions for her team. ' +
          'Which additional configuration will allow Amy to do all of this?',
        answers: [
          'Project role membership',
          'Jira Software product access',
          'Group membership',
          'Project permission scheme',
          'Field configuration scheme',
        ],
        goodAnswerIndexes: [2],
        explanation: 'The only thing that Amy cannot already do is create custom fields in a company-managed project. ' +
          'Amy needs the “Share dashboards and filters” global permission and for the third, she needs “Manage group filter subscriptions”. ' +
          'Amy needs to be a Jira Administrator. This can be done by modifying group membership, e.g. jira-admins-site-name.',
      },
      {
        question: 'Adrien, Huaying, Eloise are Administrators of a the MIRO project. The project shares a configuration with DKIM. ' +
          'Adrien, Huaying, Eloise want to be notified when new issues are created. ' +
          'There are no Default Members in any of the roles in Project Role Browser in your instance. ' +
          'Which must you do?',
        answers: [
          'In the MIRO Notification Scheme, enter Project Role (Developers) into the Issue Created event.',
          'In the DKIM Notification Scheme, add Project Role (Administrators) into the Issue Created event.',
          'Add Eloise to the Developers role in DKIM.',
          'Add Eloise to the Developers role in MIRO.',
          'Add Adrien, Huaying, Eloise to the Developers role in MIRO.',
        ],
        goodAnswerIndexes: [4],
        explanation: 'All the schemes are shared between MIRO and DKIM so there is no MIRO Notification Scheme. ' +
          'We also cannot cause any changes to DKIM.' +
          'So all three people (Adrien, Huaying, Eloise) must be added to the Developers role in MIRO in order for all three to receive Issue Created notifications in MIRO.',
      },
    ],
  },
  teeth: {
    title: 'Do they have teeth?',
    questions: [
      {
        question: 'Do hens have teeth?',
        answers: [
          'Yes',
          'No',
        ],
        goodAnswerIndexes: [1],
      },
      {
        question: 'Do sharks have teeth?',
        answers: [
          'Yes',
          'No',
        ],
        goodAnswerIndexes: [0],
      },
      {
        question: 'Which ones have teeth?',
        answers: [
          'Horse',
          'Duck',
          'Owl',
          'Cat'
        ],
        goodAnswerIndexes: [0,3],
      },
    ],
  },
};

export { quizzes };