package com.prs.business.purchaserequest;

import com.prs.business.user.User;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class PurchaseRequest {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "UserID")
	private User user;
	// private int userID;
	private LocalDateTime DateNeeded;
	private String DeliveryMode;
	private int total;
	private LocalDateTime submittedDate;
	private String reasonForRejection;
	private String status;
	
	public PurchaseRequest(int iD, User user, LocalDateTime dateNeeded, String deliveryMode, int total,
			LocalDateTime submittedDate, String reasonForRejection, String status) {
		id = iD;
		this.user = user;
		DateNeeded = dateNeeded;
		DeliveryMode = deliveryMode;
		this.total = total;
		this.submittedDate = submittedDate;
		this.reasonForRejection = reasonForRejection;
		this.status = status;
	}

	
	
	public PurchaseRequest() {
		super();
	}



	public int getID() {
		return id;
	}

	public void setID(int iD) {
		id = iD;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalDateTime getDateNeeded() {
		return DateNeeded;
	}

	public void setDateNeeded(LocalDateTime dateNeeded) {
		DateNeeded = dateNeeded;
	}

	public String getDeliveryMode() {
		return DeliveryMode;
	}

	public void setDeliveryMode(String deliveryMode) {
		DeliveryMode = deliveryMode;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public LocalDateTime getSubmittedDate() {
		return submittedDate;
	}

	public void setSubmittedDate(LocalDateTime submittedDate) {
		this.submittedDate = submittedDate;
	}

	public String getReasonForRejection() {
		return reasonForRejection;
	}

	public void setReasonForRejection(String reasonForRejection) {
		this.reasonForRejection = reasonForRejection;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
}

