import React, { Component } from "react";
import _ from "lodash";
import { getMovies } from "../services/fakeMovieService";
import ListGroup from "./common/listGroup";
import Pagination from "./MoviesPagenation";
import { paginate } from "../utils/pagination";
import { getGenres } from "../services/fakeGenreService";
import TableMovies from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    heartState: "fa fa-heart-o",
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: " asc" },
  };

  componentDidMount() {
    const genres = [{ name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handelDelete = (movie) => {
    const movies = this.state.movies.filter(
      (movieCurr) => movieCurr._id !== movie._id
    ); /* create an array which containe only movies 
    have a different id from the current movie  */
    this.setState({ movies: movies }); // ({ movies })
  };

  handleLike = (movie) => {
    //console.log("like", movie.title);
    const oldMovies = [...this.state.movies];

    const index = oldMovies.indexOf(movie);
    // console.log(index); //   movies[index]
    oldMovies[index].liked = !oldMovies[index].liked;

    this.setState({ movies: oldMovies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handelGenre = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtred =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;

    const sorted = _.orderBy(filtred, [sortColumn.path], [sortColumn.order]);

    const Mymovies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtred.length, data: Mymovies };
  };
  render() {
    const { pageSize, currentPage, sortColumn } = this.state;

    const count = this.state.movies.length;
    if (count === 0)
      return (
        <h4>
          <center>can't found movies in database </center>
        </h4>
      );

    const { totalCount, data } = this.getPagedData();

    return (
      <div className="container">
        <div>showing {totalCount} movies in the database</div>
        <div className="row">
          <div className="col col-lg-3">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onGenreSelect={this.handelGenre}
            />
          </div>
          <div className=" col col-lg-6">
            <TableMovies
              movies={data}
              sortColumn={sortColumn}
              onDelete={this.handelDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
            />
          </div>
        </div>
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Movies;
