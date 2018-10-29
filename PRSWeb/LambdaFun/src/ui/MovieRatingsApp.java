package ui;

import java.time.LocalDate;
import java.util.List;

import business.Movie;
import business.MovieCollection;
import util.Console;

public class MovieRatingsApp {

	public static void main(String[] args) {
		//initialize stuff
		MovieCollection mc = new MovieCollection();
		mc.add(new Movie("Avengers Infinity War", 2018, 4.0));
		mc.add(new Movie("Star Wars Episode 5 - Empire Strikes Back", 1980, 4.5));
		mc.add(new Movie("Sixteen Candles", 1984, 4.4));
		mc.add(new Movie("Iron Man", 1996, 4.3));
		mc.add(new Movie("A League of  Their Own", 1979, 3.9));
		mc.add(new Movie("Congo", 2007, 3.9));
		mc.add(new Movie("Back to the Future Part III", 1990, 2.1));
		mc.add(new Movie("Saving Private Ryan", 2015, 1.5));
		
		System.out.println("Welcome to the Movie Ratings application!\n");
		
		int choice = 0;
		while(choice!=6) {
		
			displayMenu();
			choice=Console.getInt("Choose a menu option",0,7);
		
		List<Movie> filteredMovies;
			switch(choice) {
			case 1:   // enter a movie
				int num = Console.getInt("How many movies do you want to enter?");
				for(int i = 1;i<=num;i++) {
					Console.println("Movie #"+i);
					Console.println("===============");
					String title = Console.getString("Enter title");
					int year = Console.getInt("Enter year: ",1900, LocalDate.now().getYear());
					double rating = Console.getDouble("Enter rating: ",0.0,5.0);
					Movie m = new Movie(title,year,rating);
					mc.add(m);
				}
				break;
				
			case 2:
				filteredMovies = mc.filterMovies(m->m.getRating()>=4.0);
				Console.println("Movies rated 4.0 or higher");
				Console.println("==========================");
				filteredMovies.stream().forEach(System.out::println);
				break;
			case 3:
				int yearRange = LocalDate.now().getYear() - 10;
				filteredMovies = mc.filterMovies(m->m.getYear()>=yearRange);
				Console.println("Movies released in last 10 years");
				Console.println("================================");
				filteredMovies.stream().forEach(System.out::println);
				break;
			case 4:
				Console.println("All Movies");
				Console.println("==============");
				mc.getMovies().stream().forEach(System.out::println);
				break;
			case 5:
				Console.println("Movie rating data");
				Console.println("=================");
				Console.println("# of movies" + mc.getSize());
				Console.println("# of movies" + mc.getLowestRating());
				Console.println("# of movies" + mc.getHighestRating());
				Console.println("# of movies" + mc.getAverageRating());
				break;
			case 6:	
				Console.print("Goodbye!");
				break;
				
			}
		}
	}

	public static void displayMenu() {
        Console.println("-----------------------");
        Console.println("What do you want to do?");
        Console.println("-----------------------");
        Console.println("1 - Enter a movie");
        Console.println("2 - View top rated movies");
        Console.println("3 - View most recent movies");
        Console.println("4 - View all movies");
        Console.println("5 - View ratings");
        Console.println("6 - Quit application");
        
        Console.println();
	}
	
}
