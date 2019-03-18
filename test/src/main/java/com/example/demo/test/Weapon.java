package com.example.demo.test;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "weapons")
public class Weapon extends AbstractLoreItem {
	@OneToOne(optional = false)
	@JoinColumn(name = "range_id", unique = true, nullable = false, updatable = false)
	private Range range;
	@ManyToMany
	@JoinTable(name = "Weapons_Tags", joinColumns = { @JoinColumn(name = "weapon_id") }, inverseJoinColumns = {
			@JoinColumn(name = "tag_id") })
	private List<Tag> tags = new ArrayList<>();
	@ManyToOne
	@JoinColumn(name="faction_id", nullable=false)
	private Faction faction;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Range getRange() {
		return range;
	}

	public void setRange(Range range) {
		this.range = range;
	}

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	public Faction getFaction() {
		return faction;
	}

	public void setFaction(Faction faction) {
		this.faction = faction;
	}

	public Weapon() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Weapon [range=" + range + ", tags=" + tags + ", faction=" + faction + ", description=" + description
				+ ", id=" + id + ", name=" + name + "]";
	}
	
}
