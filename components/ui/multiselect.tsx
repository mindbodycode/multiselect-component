"use client";

import { Fruit } from "@/app/page";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

type MultiselectProps = { fruits: Fruit[] };

import React from "react";

const Multiselect = ({ fruits }: MultiselectProps) => {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  const handleSetSelectedValues = (value: string) => {
    if (selectedFruits.includes(value)) {
      setSelectedFruits(selectedFruits.filter((item) => item !== value));
    } else {
      setSelectedFruits([...selectedFruits, value]);
    }
  };
  return (
    <div>
      <label className="block text-center" htmlFor="fruitSelection">
        Choose fruits for your dessert
      </label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="min-w-[370px]"
            variant="outline"
            size="lg"
            id="fruitSelection"
          >
            {selectedFruits?.length === 0 && "Select fruit"}
            {selectedFruits?.length > 0 && (
              <>
                Change selection
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Badge
                  variant="secondary"
                  className="badge-custom rounded-sm px-1 font-normal lg:hidden"
                >
                  {selectedFruits.length}
                </Badge>
                <div className="hidden space-x-1 lg:flex">
                  {selectedFruits.length > 2 ? (
                    <Badge
                      variant="secondary"
                      className="badge-custom rounded-sm px-1 font-normal"
                    >
                      {selectedFruits.length} fruits
                    </Badge>
                  ) : (
                    fruits
                      .filter((fruit) => selectedFruits.includes(fruit.name))
                      .map((fruit) => (
                        <Badge
                          variant="secondary"
                          key={fruit.id}
                          className="badge-custom rounded-sm px-1 font-normal"
                        >
                          {fruit.name}
                        </Badge>
                      ))
                  )}
                </div>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[245px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Find fruit" />
            <CommandList>
              <CommandEmpty>No results.</CommandEmpty>
              <CommandGroup>
                {fruits.map((fruit) => {
                  const isSelected = selectedFruits.includes(fruit.name);
                  return (
                    <CommandItem
                      key={fruit.id}
                      value={fruit.name}
                      onSelect={() => {
                        handleSetSelectedValues(fruit.name);
                      }}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground manager-selected-check"
                            : "opacity-50 [&_svg]:invisible"
                        )}
                      >
                        <Check className={cn("h-4 w-4")} />
                      </div>

                      <span>{fruit.name}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
              {selectedFruits.length > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem
                      onSelect={() => {
                        setSelectedFruits([]);
                      }}
                      className="justify-center text-center"
                    >
                      Clear
                    </CommandItem>
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Multiselect;
