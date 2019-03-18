package com.example.demo.test;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "bodyslots")
public class BodySlot extends LoreTable {
	@OneToOne(mappedBy="slot")
	private Defense defense;
	
	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getId() {
		return this.id;
	}

	public BodySlot() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Defense getDefense() {
		return defense;
	}

	public void setDefense(Defense defense) {
		this.defense = defense;
	}

	@Override
	public String toString() {
		return "BodySlot [defense=" + defense + ", id=" + id + ", name=" + name + "]";
	}

}
