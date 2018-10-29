package business;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class MovieCollection {

	private List<Movie> movies;

	public MovieCollection() {
		movies = new ArrayList<>();
	}

	public List<Movie> getMovies() {
		return movies;
	}

	public void setMovies(List<Movie> movies) {
		this.movies = movies;
	}
	
	public void add(Movie m) {
		movies.add(m);
	}
	
	public List<Movie> filterMovies(Predicate<Movie> condition) {
		List<Movie> filteredMovies = new ArrayList<>();
		
		for(Movie m:movies) {
			if(condition.test(m)) {
				filteredMovies.add(m);
			}
		}
		
		return filteredMovies;
	}
	
	public double getLowestRating() {
//		double lr = 5.0;
		
//		for(Movie m:movies) {
//			lr = Math.min(lr, m.getRating());
//		}
		
		double lr = movies.stream()
				.map(r->r.getRating())
				.reduce(5.0, (a,b)->Math.min(a, b));  // reduces list to one element
				
		
		return lr;
	}
	
	public double getHighestRating() {
		
		double hr = movies.stream()
				.map(r->r.getRating())
				.reduce(0.0, (a,b)->Math.max(a, b));
		
		return hr;
	}
	
	public double getAverageRating() {
		
		double sum = movies.stream()
				.map(r->r.getRating())
				.reduce(0.0, (a,b)-> (a+b));
		
		return sum/movies.size();
	}
	
	public int getSize() {
		return movies.size();
	}
}
