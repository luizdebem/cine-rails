class MoviesRepresenter
  def initialize(movies)
    @movies = movies
  end

  def as_json
    if movies.respond_to?('map')
      movies.map do |movie|
        {
          id: movie.id,
          title: movie.title,
          year: movie.year, 
          synopsis: movie.synopsis,
          rate: movie.rate,
          director: {
            id: movie.director.id,
            name: movie.director.name
          }
        }
      end
    else 
        {
          id: movies.id,
          title: movies.title,
          year: movies.year,
          synopsis: movies.synopsis,
          rate: movies.rate,
          director: {
            id: movies.director.id,
            name: movies.director.name
          }
        }
    end
  end

  private

  attr_reader :movies
end