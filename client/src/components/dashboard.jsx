import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./common/pagination";
import ListGroup from "./listgroup";
import Posts from "./posts";
import { paginate } from "../utils/paginate";
import config from "../config.json";
import http from "../services/httpService";

class Dashboard extends Component {
  state = {
    allposts: [],
    currentPage: 1,
    pageSize: 20,
    tags: [],
    selectedTag: { _id: "1", name: "All Posts" },
  };
  async componentDidMount() {
    const { data: allposts } = await http.get(config.postEndPoint);
    const { data: tags } = await http.get(config.tagsEndPoint);

    this.setState({
      allposts: [...allposts],
      tags: [
        {
          _id: "1",
          name: "All Posts",
        },
        ...tags,
      ],
    });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handlePostDelete = (post) => {};
  handleTagSelect = (tag) => {
    console.log(tag);
    this.setState({ selectedTag: tag, currentPage: 1 });
  };
  render() {
    const { user } = this.props;
    const { allposts, pageSize, currentPage, tags, selectedTag } = this.state;
    const filtered =
      selectedTag.name !== "All Posts"
        ? allposts.filter((post) => post.tags.includes(selectedTag))
        : allposts;
    const posts = paginate(filtered, currentPage, pageSize);
    if (allposts.length === 0)
      return <p>There are no posts in the database!</p>;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex w-100 justify-content-between m-3">
                Showing {filtered.length} posts.
                {user && (
                  <Link to="/new-post">
                    <button
                      type="button"
                      class="btn btn-success"
                      style={{ marginBottom: 20 }}
                    >
                      New Post
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <Posts posts={posts} onDelete={this.handlePostDelete} />
            </div>
            <div className="col-3">
              <ListGroup
                items={tags}
                selectedTag={this.state.selectedTag}
                onTagSelect={this.handleTagSelect}
              />
            </div>
            <Pagination
              itemCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
