package com.example.demo.test;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "defenses")
public class Defense extends AbstractLoreItem {
	@OneToOne(optional=false)
	@JoinColumn(name="bodyslot_id", nullable=false, updatable = false)
	private BodySlot slot;
	@ManyToMany(cascade = { CascadeType.ALL })
	@JoinTable(name = "Defense_Tags", joinColumns = { @JoinColumn(name = "defense_id") }, inverseJoinColumns = {
			@JoinColumn(name = "tag_id") })
	private List<Tag> tags = new ArrayList<>();
	/*@ManyToOne
	@JoinColumn(name = "faction_id", nullable = false)
	private Faction faction;

	public Faction getFaction() {
		return faction;
	}

	public void setFaction(Faction faction) {
		this.faction = faction;
	}*/

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

	public String getDescriptor() {
		return description;
	}

	public void setDescriptor(String description) {
		this.description = description;
	}

	public BodySlot getSlot() {
		return slot;
	}

	public void setSlot(BodySlot slot) {
		this.slot = slot;
	}

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}
	
	public void addTag(Tag tag) {
		tags.add(tag);
	}

	/*@Override
	public String toString() {
		return "Defense [slot=" + slot + ", tags=" + tags + ", faction=" + faction + ", description=" + description
				+ ", id=" + id + ", name=" + name + "]";
	}*/

	public Defense() {
		super();
		// TODO Auto-generated constructor stub
	}

}
