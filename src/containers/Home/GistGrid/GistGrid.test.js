import { render, screen } from '@testing-library/react';
import GistGrid from './index';

const DemoData = [
  {
    url: 'https://api.github.com/gists/32d52cbda498a827e7058b9621aa6ccf',
    forks_url:
      'https://api.github.com/gists/32d52cbda498a827e7058b9621aa6ccf/forks',
    commits_url:
      'https://api.github.com/gists/32d52cbda498a827e7058b9621aa6ccf/commits',
    id: '32d52cbda498a827e7058b9621aa6ccf',
    node_id: 'MDQ6R2lzdDMyZDUyY2JkYTQ5OGE4MjdlNzA1OGI5NjIxYWE2Y2Nm',
    git_pull_url:
      'https://gist.github.com/32d52cbda498a827e7058b9621aa6ccf.git',
    git_push_url:
      'https://gist.github.com/32d52cbda498a827e7058b9621aa6ccf.git',
    html_url: 'https://gist.github.com/32d52cbda498a827e7058b9621aa6ccf',
    files: {
      'rest_quick_reference.md': {
        filename: 'rest_quick_reference.md',
        type: 'text/markdown',
        language: 'Markdown',
        raw_url:
          'https://gist.githubusercontent.com/mshez/32d52cbda498a827e7058b9621aa6ccf/raw/a429020cda624d7d5be176d931c4d36d756bb154/rest_quick_reference.md',
        size: 6115,
      },
    },
    public: true,
    created_at: '2019-02-28T09:48:51Z',
    updated_at: '2019-02-28T09:48:51Z',
    description: 'REST, RESTful API Quick Reference',
    comments: 0,
    user: null,
    comments_url:
      'https://api.github.com/gists/32d52cbda498a827e7058b9621aa6ccf/comments',
    owner: {
      login: 'mshez',
      id: 37899177,
      node_id: 'MDQ6VXNlcjM3ODk5MTc3',
      avatar_url: 'https://avatars.githubusercontent.com/u/37899177?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mshez',
      html_url: 'https://github.com/mshez',
      followers_url: 'https://api.github.com/users/mshez/followers',
      following_url:
        'https://api.github.com/users/mshez/following{/other_user}',
      gists_url: 'https://api.github.com/users/mshez/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/mshez/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/mshez/subscriptions',
      organizations_url: 'https://api.github.com/users/mshez/orgs',
      repos_url: 'https://api.github.com/users/mshez/repos',
      events_url: 'https://api.github.com/users/mshez/events{/privacy}',
      received_events_url: 'https://api.github.com/users/mshez/received_events',
      type: 'User',
      site_admin: false,
    },
    truncated: false,
  },
];

test('renders GistsGrid', () => {
  render(<GistGrid />);
  const linkElement = screen.getByText(/No users found/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders GistsGrid with Items', async () => {
  render(<GistGrid data={DemoData} />);
  const items = await screen.findAllByText(/Visit Gist/);
  expect(items).toHaveLength(1);
});
