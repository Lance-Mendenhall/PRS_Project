package business;

public class Movie {

	private String Title;
	private int year;
	private double rating;
	
	public Movie(String title, int year, double rating) {
		super();
		Title = title;
		this.year = year;
		this.rating = rating;
	}

	public Movie() {
		super();
	}

	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		Title = title;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
//		return "Movie [Title=" + Title + ", year=" + year + ", rating=" + rating + "]";
		return Title + " (" + year + ")  " + rating;
	}
	
	
}
