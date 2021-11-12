import {render} from '@testing-library/react';
import { composeStories} from '@storybook/testing-react';
import * as TaskListStories from './TaskList.stories'; // Our stories under test

// composeStories will process all the information related to the componenet (e.g. args)
const { withPinnedTasks} = composeStories(TaskListStories);

describe('TaskList story validation', () => {
    it('renders pinned tasks at the start of the list', () => {
        const { container} = render(<TaskListStories.WithPinnedTasks />);

        expect(
            container.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
        ).not.toBe(null);
    });

});