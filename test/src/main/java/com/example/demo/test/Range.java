package com.example.demo.test;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ranges")
public class Range extends LoreTable {
//	@OneToOne(mappedBy = "range")
//	private Weapon weapon;

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

//	public Weapon getWeapon() {
//		return weapon;
//	}
//
//	public void setWeapon(Weapon weapon) {
//		this.weapon = weapon;
//	}

	public Range() {
		super();
		// TODO Auto-generated constructor stub
	}

//	@Override
//	public String toString() {
//		return "Range [weapon=" + weapon + ", id=" + id + ", name=" + name + "]";
//	}
//
}
