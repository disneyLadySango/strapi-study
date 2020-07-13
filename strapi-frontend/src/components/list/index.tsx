import React, { useState } from 'react';
import { useGetAllContentsQuery } from '../../generated/graphql';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from '../content';

export default function List() {
  const [contentState, setContent] = useState({id: '', title: ''})
  const { data } = useGetAllContentsQuery();
  return (
    <div>
      <Router>
        <ul>
          {data?.contents?.length != 0 &&
            data?.contents?.map(
              (content: any, index: number) => {
              return (
                <li key={`contents_list_${index}`}>
                  <h4>
                    <Link
                      to={`/content/${content.id}`}
                      onClick={() => setContent({ id: content.id, title: content.Title })}
                    >
                        {`ID:${content.id}________Title:${content.Title}`}
                    </Link>
                  </h4>
                </li>
              )
            })
          }
        </ul>
        <Route
          path={'/content/:id'}
          render={() => <Content id={contentState.id} title={contentState.title} />}
        />
        <Link to="/">{'TOPへ戻る'}</Link>
      </Router>
    </div>
  )
}
