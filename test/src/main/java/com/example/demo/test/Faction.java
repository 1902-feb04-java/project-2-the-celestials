package com.example.demo.test;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "factions")
public class Faction extends AbstractLoreItem {
	@ManyToMany(cascade = { CascadeType.ALL })
	@JoinTable(name = "Faction_Tags", joinColumns = { @JoinColumn(name = "faction_id") }, inverseJoinColumns = {
			@JoinColumn(name = "tag_id") })
	private List<Tag> tags = new ArrayList<>();
	private long population;
	@ManyToOne
	@JoinColumn(name = "world_id", nullable = false)
	private World world;
	@OneToMany(cascade = { CascadeType.ALL }, mappedBy = "faction")
	private List<Weapon> weapons = new ArrayList<>();
	@OneToMany(cascade = { CascadeType.ALL }, mappedBy = "faction")
	private List<Defense> defenses = new ArrayList<>();

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescriptor() {
		return description;
	}

	public void setDescriptor(String description) {
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	public long getPopulation() {
		return population;
	}

	public void setPopulation(long population) {
		this.population = population;
	}

	public World getWorld() {
		return world;
	}

	public void setWorld(World world) {
		this.world = world;
	}

	public List<Weapon> getWeapons() {
		return weapons;
	}

	public void setWeapons(List<Weapon> weapons) {
		this.weapons = weapons;
	}

	public List<Defense> getDefenses() {
		return defenses;
	}

	public void setDefenses(List<Defense> defenses) {
		this.defenses = defenses;
	}

	@Override
	public String toString() {
		return "Faction [id=" + id + ", tags=" + tags + ", population=" + population + ", world=" + world
				+ ", description=" + description + ", name=" + name + ", weapons=" + weapons + ", defenses=" + defenses
				+ "]";
	}

	public Faction() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Faction(int id, List<Tag> tags, long population, World world, List<Weapon> weapons, List<Defense> defenses) {
		super();
		this.id = id;
		this.tags = tags;
		this.population = population;
		this.world = world;
		this.weapons = weapons;
		this.defenses = defenses;
	}
}
